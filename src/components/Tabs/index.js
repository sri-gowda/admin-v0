import React from 'react';

const Tabs = ({ tabs, handleTabClick, complainstData, loading }) => {

    return (
        <div>
            <div className='tabs'>
                {
                    tabs && tabs.map((tab, index) => {

                        return (
                            <div key={index} className="tab-item">
                                <div onClick={() => handleTabClick(tab)} className={tab.isSelected ? 'selected' : ''}>
                                    {tab.label}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='tab-content'>
                {
                    loading ? <h1>Loading...</h1> :
                        complainstData && complainstData.map((itm, index) => {

                            return (
                                <div key={`as${index}`}>
                                    <table>
                                        {/* <thead>
                                        <tr>
                                           
                                        </tr>
                                    </thead> */}
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {itm.customerName}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })
                }
            </div>
        </div >
    );
}

export default Tabs;