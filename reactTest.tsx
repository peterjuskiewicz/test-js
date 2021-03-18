/**
 * If you want to prove your React skills, please try this test
 * TestComponent is a React component
 * getDataFromExternalSource(string id) is a function and it can return an IData object or undefined
 * The id comes from a reducer and the value may change at any time
 * 
 * 
 * WHAT THE COMPONENT SHOULD RETURN:
 * - If myData.age is less than 18, it should render the ComponentA
 * - If myData.age is greater than or equal to 18, it should render the ComponentB
 * - If there is no data, it should display an error message "There was an error"
 * 
 * 
 * TIPS: 
 * - This is a theoretical question, there is no need to install packages.
 * - ComponentA and ComponentB are not real components, just an example. You won´t be able to render this.
 * - The external data function can return undefined
 */

import React, { useEffect } from "react";
import ComponentA from 'components/ComponentA';
import ComponentB from 'components/ComponentB';
import useSelector from 'redux'

interface IRootState {
    MyReducer: any;
}

interface IInitialState {
    id: string;
    
}

interface IData {
    name: string;
    age: number;
}

const getDataFromExternalSource = (id: string): IData | undefined => {
    // This returns an IData object or undefined
};


const TestComponent = () => {
    const myReducer: IInitialState = useSelector((state: IRootState) => state.MyReducer);

    const [data, setData] = React.useState<IData>(getDataFromExternalSource(myReducer?.id))

    useEffect(() => {
        setData(getDataFromExternalSource(myReducer?.id))
    }, [myReducer])

    if(data?.age < 18) {
        return (<ComponentA />)
    } else if (data?.age >= 18) {
        return (<ComponentB />)
    } else {
        return <div>There was an error</div>
    }
    
}

export default TestComponent;



