import { fakeApi } from "./httpSrvc";
const complaintsData = [
    {
        complaintNo: "01",
        customerName: "Pavan",
        customerSegment: "kashgDUAHI",
        masterDefect: "Master Defect",
        createdDate: "2022-02-02",
        status: "Completed",
        analysisDocument: "Analysis Doc"
    },
    {
        complaintNo: "02",
        customerName: "Pavan",
        customerSegment: "kashgDUAHI",
        masterDefect: "Master Defect",
        createdDate: "2022-02-02",
        status: "Completed",
        analysisDocument: "Analysis Doc"
    },
    {
        complaintNo: "03",
        customerName: "Pavan",
        customerSegment: "kashgDUAHI",
        masterDefect: "Master Defect",
        createdDate: "2022-02-02",
        status: "Completed",
        analysisDocument: "Analysis Doc"
    },
    {
        complaintNo: "04",
        customerName: "Pavan",
        customerSegment: "kashgDUAHI",
        masterDefect: "Master Defect",
        createdDate: "2022-02-02",
        status: "Completed",
        analysisDocument: "Analysis Doc"
    },
]


function getProductsData() {
    return fakeApi(complaintsData);
}

function deleteProduct() {

}

export {
    getProductsData,
    deleteProduct
}