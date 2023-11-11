


export const fetchAllData = () => async (dispatch) => {
    try {
        dispatch({ type: 'DATA_REQUEST' });

        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        dispatch({ type: 'DATA_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'DATA_FAILURE' });
    }
};

export const selectData = (grouping, allTickets, ordering) => async (dispatch) => {
    try {
        
        dispatch({type : 'SELECT_DATA_REQUEST'})

        let user = false;
        let mySet = new Set();
        let myArr = [], selectedData = [];

        if(grouping === 'status'){
            allTickets.forEach((element) => {
                mySet.add(element.status);
            })

            myArr = [...mySet];

            myArr.forEach((element, index) => {
                let myArr = allTickets.filter((filterElement) => {
                   return  element === filterElement.status;
            })
            selectedData.push({
                [index] : {
                    title : element,
                    value : myArr
                }
            })
         })
            
        }else if(grouping === 'user'){
            user = true;
            allTickets?.allUser.forEach((element, index) => {
                myArr = allTickets?.allTickets?.filter((filterElement) => {
                    return element.id === filterElement.userId;
                })

                selectedData.push({
                    [index] : {
                        title : element.name,
                        value: myArr
                    }
                })
            })
        }else{
            let priority_list = ["No priority", "Low", "Medium", "High", "Urgent" ];

            priority_list.forEach((element, index) => {
                myArr = allTickets.filter((filterElement) => {
                    return index === filterElement.priority;
                })

                selectedData.push({
                    [index] : {
                        title : element,
                        value: myArr
                    }
                })
            })
        }

        if(ordering === "title"){
            selectedData.forEach((element, index) => {
                element[index]?.value?.sort((a, b) => a.title.localeCompare(b.title))
            })
        }

        if(ordering === "priority"){
            selectedData.forEach((element, index) => {
                element[index]?.value?.sort((a, b) => b.priority - a.priority)
            })
        }
        dispatch({
            type : 'SELECT_DATA_SUCCESS',
            payload : {selectedData, user},
        });
    } catch (error) {
        dispatch({type : 'SELECT_DATA_FAILURE', payload : error.message })
    }
}