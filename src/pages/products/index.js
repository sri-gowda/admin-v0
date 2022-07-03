import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import HeaderTwo from '../../components/HeaderTwo';
import Tabs from '../../components/Tabs';
import { getProductsData } from '../../services/productSrvc';


const tabDetails = [
    {
        label: 'My Complaints',
        isSelected: true
    },
    {
        label: 'All Complaints',
        isSelected: false
    }
]

const Products = () => {
    const contentRef = useOutletContext();
    const [tabs, setTabs] = useState(tabDetails);
    const [loading, setLoading] = useState(false);
    const [complainstData, setComplaintsData] = useState();

    function handleTabClick(tab) {
        setComplaintsData(null);
        let tempTabDetails = tabDetails.map(itm => {
            if (itm.label === tab.label) {
                itm.isSelected = true;
            } else {
                itm.isSelected = false;
            }
            return itm;
        })
        setTabs(tempTabDetails);
    }

    useEffect(() => {
        async function getComplaintsData() {
            setLoading(true)
            const response = await getProductsData();
            if (response) {
                setComplaintsData(response);
            }
            setLoading(false)
        }
        getComplaintsData()
    }, [tabs])

    return (
        <div className='content' ref={contentRef}>
            <HeaderTwo />
            <Tabs tabs={tabs} handleTabClick={handleTabClick} complainstData={complainstData} loading={loading} />
        </div>

    );
}

export default Products;