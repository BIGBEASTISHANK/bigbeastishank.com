"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEdit, FaTrash, FaPlus, FaTimes, FaSearch, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { ShortDivider } from "@/utility/Dividers";

interface ClientDetail {
    _id: string;
    invoiceId: string;
    name: string;
    email: string;
    mobile: number;
    description: string;
    startedOn: Date | string;
    finishedOn: Date | string;
    actualAmount: number;
    discount: number;
    extraCharge: number;
    totalAmount: number;
    paid: number;
    remaining: number;
}

type SortField = "startedOn" | "finishedOn" | "name" | "remaining";
type SortOrder = "asc" | "desc";

export default function ClientDetailsComponent() {
    const [clients, setClients] = useState<ClientDetail[]>([]);
    const [filteredClients, setFilteredClients] = useState<ClientDetail[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingClient, setEditingClient] = useState<ClientDetail | null>(null);
    const [formData, setFormData] = useState<Partial<ClientDetail>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState("");
    const [sortField, setSortField] = useState<SortField>("startedOn");
    const [sortOrder, setSortOrder] = useState<SortOrder>("desc");

    useEffect(() => {
        fetchClients();
    }, []);

    useEffect(() => {
        filterAndSortClients();
    }, [searchTerm, clients, sortField, sortOrder]);

    // Auto-calculate totals when amounts change
    useEffect(() => {
        const actualAmount = formData.actualAmount || 0;
        const discount = formData.discount || 0;
        const extraCharge = formData.extraCharge || 0;
        const paid = formData.paid || 0;

        const totalAmount = actualAmount - discount + extraCharge;
        const remaining = totalAmount - paid;

        setFormData(prev => ({
            ...prev,
            totalAmount,
            remaining,
        }));
    }, [formData.actualAmount, formData.discount, formData.extraCharge, formData.paid]);

    function filterAndSortClients() {
        let result = [...clients];

        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase();
            result = result.filter(
                (client) =>
                    client.name.toLowerCase().includes(term) ||
                    client.email.toLowerCase().includes(term) ||
                    client.invoiceId.toLowerCase().includes(term)
            );
        }

        result.sort((a, b) => {
            let compareA: any;
            let compareB: any;

            switch (sortField) {
                case "startedOn":
                    compareA = new Date(a.startedOn).getTime();
                    compareB = new Date(b.startedOn).getTime();
                    break;
                case "finishedOn":
                    compareA = a.finishedOn ? new Date(a.finishedOn).getTime() : 0;
                    compareB = b.finishedOn ? new Date(b.finishedOn).getTime() : 0;
                    break;
                case "name":
                    compareA = a.name.toLowerCase();
                    compareB = b.name.toLowerCase();
                    break;
                case "remaining":
                    compareA = a.remaining || 0;
                    compareB = b.remaining || 0;
                    break;
                default:
                    return 0;
            }

            if (sortOrder === "asc") {
                return compareA > compareB ? 1 : compareA < compareB ? -1 : 0;
            } else {
                return compareA < compareB ? 1 : compareA > compareB ? -1 : 0;
            }
        });

        setFilteredClients(result);
    }

    function toggleSort(field: SortField) {
        if (sortField === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortOrder("desc");
        }
    }

    function formatIndianCurrency(num: number): string {
        const numStr = num.toString();
        const lastThree = numStr.substring(numStr.length - 3);
        const otherNumbers = numStr.substring(0, numStr.length - 3);
        if (otherNumbers !== "") {
            return (
                otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
                "," +
                lastThree
            );
        }
        return lastThree;
    }

    async function fetchClients() {
        try {
            const response = await fetch("/api/getClientDetails", {
                credentials: "include",
            });
            const data = await response.json();
            if (response.ok) {
                setClients(data.clients);
            }
        } catch (error) {
            console.error("Error fetching clients:", error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const url = editingClient
                ? "/api/updateClientDetail"
                : "/api/createClientDetail";
            const method = editingClient ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                await fetchClients();
                resetForm();
            } else {
                setError(data.error || "An error occurred");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setError("Internal server error");
        } finally {
            setIsSubmitting(false);
        }
    }

    async function handleDelete(clientId: string) {
        if (!confirm("Are you sure you want to delete this client?")) return;

        try {
            const response = await fetch("/api/deleteClientDetail", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ id: clientId }),
            });

            if (response.ok) {
                await fetchClients();
            }
        } catch (error) {
            console.error("Error deleting client:", error);
        }
    }

    function resetForm() {
        setFormData({});
        setEditingClient(null);
        setShowForm(false);
        setError("");
    }

    function openEditForm(client: ClientDetail) {
        setEditingClient(client);
        setFormData(client);
        setShowForm(true);
        setError("");
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-4">
                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        type: "spring",
                    }}
                    className="text-3xl font-bold select-none"
                >
                    Client Details
                </motion.h1>

                <div className="flex flex-col md:flex-row gap-3 md:items-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5,
                            type: "spring",
                        }}
                        className="flex bg-[#050607]/10 backdrop-blur-md border border-[#1793D1] rounded-full px-4 select-none font-normal text-sm md:text-base"
                    >
                        <FaSearch className="my-auto mr-2" />
                        <input
                            className="bg-transparent outline-none w-full h-10"
                            placeholder="Search by name, email or invoice ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.7,
                            duration: 0.5,
                            type: "spring",
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowForm(true)}
                        className="bg-[#1793D1] px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#1793D1]/50 cursor-pointer select-none whitespace-nowrap"
                    >
                        <FaPlus /> Add Client
                    </motion.button>
                </div>
            </div>

            {/* Sorting Controls */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex gap-2 mb-4 flex-wrap"
            >
                <button
                    onClick={() => toggleSort("startedOn")}
                    className={`px-3 py-2 rounded-lg border text-sm flex items-center gap-2 transition-all cursor-pointer ${
                        sortField === "startedOn"
                            ? "bg-[#1793D1] border-[#1793D1] shadow-md"
                            : "bg-[#0A0C0E]/20 border-[#1793D1]/50 hover:border-[#1793D1]"
                    }`}
                >
                    Started Date
                    {sortField === "startedOn" &&
                        (sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                </button>

                <button
                    onClick={() => toggleSort("finishedOn")}
                    className={`px-3 py-2 rounded-lg border text-sm flex items-center gap-2 transition-all cursor-pointer ${
                        sortField === "finishedOn"
                            ? "bg-[#1793D1] border-[#1793D1] shadow-md"
                            : "bg-[#0A0C0E]/20 border-[#1793D1]/50 hover:border-[#1793D1]"
                    }`}
                >
                    Finished Date
                    {sortField === "finishedOn" &&
                        (sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                </button>

                <button
                    onClick={() => toggleSort("name")}
                    className={`px-3 py-2 rounded-lg border text-sm flex items-center gap-2 transition-all cursor-pointer ${
                        sortField === "name"
                            ? "bg-[#1793D1] border-[#1793D1] shadow-md"
                            : "bg-[#0A0C0E]/20 border-[#1793D1]/50 hover:border-[#1793D1]"
                    }`}
                >
                    Name
                    {sortField === "name" &&
                        (sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                </button>

                <button
                    onClick={() => toggleSort("remaining")}
                    className={`px-3 py-2 rounded-lg border text-sm flex items-center gap-2 transition-all cursor-pointer ${
                        sortField === "remaining"
                            ? "bg-[#1793D1] border-[#1793D1] shadow-md"
                            : "bg-[#0A0C0E]/20 border-[#1793D1]/50 hover:border-[#1793D1]"
                    }`}
                >
                    Remaining Amount
                    {sortField === "remaining" &&
                        (sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />)}
                </button>
            </motion.div>

            {isLoading ? (
                <div className="flex justify-center py-10">
                    <PulseLoader loading={true} size={15} color="#1793D1" />
                </div>
            ) : filteredClients.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center py-10 text-[#F6F9FC]/60 select-none"
                >
                    {searchTerm
                        ? "No clients found matching your search"
                        : "No clients added yet"}
                </motion.div>
            ) : (
                <div className="flex flex-col gap-4">
                    {filteredClients.map((client, index) => {
                        return (
                            <motion.div
                                key={client._id}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.1 * index,
                                    duration: 0.5,
                                    type: "spring",
                                }}
                                className="bg-[#0A0C0E]/10 backdrop-blur-md border border-[#1793D1]/50 hover:border-[#1793D1]/80 p-5 rounded-2xl hover:shadow-lg shadow-md hover:shadow-[#1793D1]/80 shadow-[#1793D1]/50"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <div className="sm:flex items-center gap-2 mb-1">
                                            <h3 className="text-xl font-semibold select-none">
                                                {client.name}
                                            </h3>
                                            <span className="text-xs px-2 py-1 bg-[#1793D1]/20 border border-[#1793D1]/50 rounded-full select-none">
                                                #{client.invoiceId}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#F6F9FC]/75 select-none sm:mt-0 mt-3">
                                            {client.email}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => openEditForm(client)}
                                            className="p-2 bg-[#1793D1]/20 hover:bg-[#1793D1]/40 rounded-lg transition-colors cursor-pointer select-none"
                                        >
                                            <FaEdit className="text-[#1793D1]" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(client._id)}
                                            className="p-2 bg-red-500/20 hover:bg-red-500/40 rounded-lg transition-colors cursor-pointer select-none"
                                        >
                                            <FaTrash className="text-red-500" />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm select-none">
                                    <div>
                                        <span className="text-[#F6F9FC]/60">Mobile:</span>{" "}
                                        {client.mobile}
                                    </div>
                                    <div>
                                        <span className="text-[#F6F9FC]/60">Started:</span>{" "}
                                        {client.startedOn
                                            ? new Date(client.startedOn).toLocaleDateString()
                                            : "N/A"}
                                    </div>
                                    <div>
                                        <span className="text-[#F6F9FC]/60">Finished:</span>{" "}
                                        {client.finishedOn
                                            ? new Date(client.finishedOn).toLocaleDateString()
                                            : "N/A"}
                                    </div>
                                    <div>
                                        <span className="text-[#F6F9FC]/60">Base Amount:</span>{" "}
                                        ₹{formatIndianCurrency(client.actualAmount || 0)}
                                    </div>
                                    <div>
                                        <span className="text-[#F6F9FC]/60">Discount:</span>{" "}
                                        <span className="text-green-400">
                                            -₹{formatIndianCurrency(client.discount || 0)}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-[#F6F9FC]/60">Extra Charge:</span>{" "}
                                        <span className="text-yellow-400">
                                            +₹{formatIndianCurrency(client.extraCharge || 0)}
                                        </span>
                                    </div>
                                    <div className="font-semibold text-blue-400">
                                        <span className="text-[#F6F9FC]/60">Total Amount:</span>{" "}
                                        ₹{formatIndianCurrency(client.totalAmount || 0)}
                                    </div>
                                    <div>
                                        <span className="text-[#F6F9FC]/60">Paid:</span>{" "}
                                        ₹{formatIndianCurrency(client.paid || 0)}
                                    </div>
                                    <div
                                        className={`${
                                            client.remaining > 0
                                                ? "text-red-400"
                                                : client.remaining === 0
                                                ? "text-green-400"
                                                : "text-yellow-400"
                                        } font-semibold`}
                                    >
                                        <span className="text-[#F6F9FC]/60">Remaining:</span>{" "}
                                        ₹{formatIndianCurrency(Math.abs(client.remaining))}
                                        {client.remaining < 0 && " (Overpaid)"}
                                    </div>
                                </div>

                                <ShortDivider customCSS="mt-3" />

                                <p className="mt-3 text-sm text-[#F6F9FC]/80 select-none">
                                    {client.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            )}

            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        onClick={resetForm}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="backdrop-blur-md border-2 border-[#1793D1]/50 rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-5">
                                <h2 className="text-2xl font-bold select-none">
                                    {editingClient ? "Edit Client" : "Add New Client"}
                                </h2>
                                <button
                                    onClick={resetForm}
                                    className="p-2 hover:bg-[#1793D1]/20 rounded-lg transition-colors cursor-pointer select-none"
                                >
                                    <FaTimes className="text-xl" />
                                </button>
                            </div>

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl"
                                >
                                    <p className="text-red-400 text-sm flex items-center gap-2 select-none">
                                        <span className="text-red-500">⚠️</span>
                                        {error}
                                    </p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input
                                    type="text"
                                    placeholder="Invoice ID"
                                    value={formData.invoiceId || ""}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            invoiceId: e.target.value,
                                        })
                                    }
                                    className="outline-none border-2 border-[#1793D1] rounded-xl py-2 px-3 bg-[#0A0C0E]/20"
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={formData.name || ""}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="outline-none border-2 border-[#1793D1] rounded-xl py-2 px-3 bg-[#0A0C0E]/20"
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email || ""}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="outline-none border-2 border-[#1793D1] rounded-xl py-2 px-3 bg-[#0A0C0E]/20"
                                    required
                                />

                                <input
                                    type="number"
                                    placeholder="Mobile"
                                    value={formData.mobile || ""}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            mobile: parseInt(e.target.value),
                                        })
                                    }
                                    className="outline-none border-2 border-[#1793D1] rounded-xl py-2 px-3 bg-[#0A0C0E]/20 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    required
                                />

                                <textarea
                                    placeholder="Description"
                                    value={formData.description || ""}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            description: e.target.value,
                                        })
                                    }
                                    className="outline-none border-2 border-[#1793D1] rounded-xl py-2 px-3 bg-[#0A0C0E]/20 min-h-[100px] resize-none"
                                    required
                                />

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-sm text-[#F6F9FC]/60 mb-1 block select-none">
                                            Started On
                                        </label>
                                        <input
                                            type="date"
                                            value={
                                                typeof formData.startedOn === "string"
                                                    ? formData.startedOn.split("T")[0]
                                                    : formData.startedOn instanceof Date
                                                    ? formData.startedOn.toISOString().split("T")[0]
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    startedOn: e.target.value,
                                                })
                                            }
                                            className="outline-none border-2 border-[#1793D1] rounded-xl py-2 px-3 bg-[#0A0C0E]/20 w-full cursor-pointer"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm text-[#F6F9FC]/60 mb-1 block select-none">
                                            Finished On
                                        </label>
                                        <input
                                            type="date"
                                            value={
                                                typeof formData.finishedOn === "string"
                                                    ? formData.finishedOn.split("T")[0]
                                                    : formData.finishedOn instanceof Date
                                                    ? formData.finishedOn.toISOString().split("T")[0]
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    finishedOn: e.target.value,
                                                })
                                            }
                                            className="outline-none border-2 border-[#1793D1] rounded-xl py-2 px-3 bg-[#0A0C0E]/20 w-full cursor-pointer"
                                        />
                                    </div>
                                </div>

                                {/* Pricing Section */}
                                <div className="border-2 border-[#1793D1]/60 rounded-xl p-4">
                                    <h3 className="text-sm font-semibold mb-3 text-[#1793D1]">Pricing Details</h3>
                                    
                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        <div>
                                            <label className="text-xs text-[#F6F9FC]/60 mb-1 block">Base Amount</label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                value={formData.actualAmount || ""}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        actualAmount: parseInt(e.target.value) || 0,
                                                    })
                                                }
                                                className="outline-none border-2 border-[#1793D1]/50 rounded-xl py-2 px-3 bg-[#0A0C0E]/40 w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs text-[#F6F9FC]/60 mb-1 block">Discount</label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                value={formData.discount || ""}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        discount: parseInt(e.target.value) || 0,
                                                    })
                                                }
                                                className="outline-none border-2 border-[#1793D1]/50 rounded-xl py-2 px-3 bg-[#0A0C0E]/40 w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        <div>
                                            <label className="text-xs text-[#F6F9FC]/60 mb-1 block">Extra Charge</label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                value={formData.extraCharge || ""}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        extraCharge: parseInt(e.target.value) || 0,
                                                    })
                                                }
                                                className="outline-none border-2 border-[#1793D1]/50 rounded-xl py-2 px-3 bg-[#0A0C0E]/40 w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs text-[#F6F9FC]/60 mb-1 block">Paid Amount</label>
                                            <input
                                                type="number"
                                                placeholder="0"
                                                value={formData.paid || ""}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        paid: parseInt(e.target.value) || 0,
                                                    })
                                                }
                                                className="outline-none border-2 border-[#1793D1]/50 rounded-xl py-2 px-3 bg-[#0A0C0E]/40 w-full [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Calculated Values Display */}
                                    <div className="bg-[#1793D1]/20 rounded-lg p-3 mt-3">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-[#F6F9FC]/80">Total Amount:</span>
                                            <span className="text-lg font-semibold text-blue-400">
                                                ₹{formatIndianCurrency(formData.totalAmount || 0)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-[#F6F9FC]/80">Remaining:</span>
                                            <span className={`text-lg font-semibold ${
                                                (formData.remaining || 0) > 0 
                                                    ? "text-red-400" 
                                                    : (formData.remaining || 0) === 0 
                                                    ? "text-green-400" 
                                                    : "text-yellow-400"
                                            }`}>
                                                ₹{formatIndianCurrency(Math.abs(formData.remaining || 0))}
                                                {(formData.remaining || 0) < 0 && " (Overpaid)"}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3 mt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 bg-[#1793D1] py-2 rounded-xl font-semibold hover:scale-[1.02] disabled:opacity-50 cursor-pointer select-none"
                                    >
                                        {isSubmitting ? (
                                            <PulseLoader loading={true} size={10} color="white" />
                                        ) : editingClient ? (
                                            "Update Client"
                                        ) : (
                                            "Add Client"
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-6 py-2 border-2 border-[#1793D1] rounded-xl font-semibold hover:bg-[#1793D1]/20 cursor-pointer select-none"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
