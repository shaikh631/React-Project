import { useEffect , useState } from "react";

function UseCurrenceInfo(currency){
    const [data , setdata] = useState({})
    useEffect (() => {
        fetch(`https://2026-01-13.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
        console.log(data);
    },[currency])
    return data
}
export default UseCurrenceInfo;