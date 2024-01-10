import toast from "react-hot-toast";

export default function ComingSoonToast() {
  toast("Coming Soon", {
    icon: "❗",
    style: {
      fontSize: "20px",
    },
    position: "top-center",
  });
}
