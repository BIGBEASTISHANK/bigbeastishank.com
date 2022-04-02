// Importing Stuffs
import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {

  // Variable
  const date = parseISO(dateString);
  
  // Returning Time in Correct Form
  return <time dateTime={dateString}>{format(date, "d LLLL, yyyy")}</time>;
}