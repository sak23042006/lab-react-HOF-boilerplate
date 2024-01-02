import React from 'react'
import "../App.css"

class HigherOrderFunctions extends React.Component{
    //PROGRESSION 1
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    //PROGRESSION 2
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    //PROGRESSION 3
    renderItemsByUserType = () => {
        const data = this.state.userData;
        const filter = data.filter((item) => item.user_type === "Designer");
        const mapRows = filter.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    //PROGRESSION 4
    renderItemsStartingWithJ = () => {
        const data = this.state.userData;
        const filter = data.filter((item) =>item.name[0] === "J" );
        const mapRows = filter.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    //PROGRESSION 5
    renderItemsByAge = () => {
        const data = this.state.userData;
        const filter = data.filter((item) =>item.age>28 && item.age<=50 );
        const mapRows = filter.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

   //PROGRESSION 6
renderItemsByExperience = () => {
    const data = this.state.userData;
    const filter = data.filter((item) =>item.user_type === "Designer" );
    let years=0;
    const mapRows = filter.map((item) => (
        years+=item.years
    ));
return <>{years}</>;
};

    render(){
        return(
        <>
            <center>
                <div>
                    <h2>Display all items</h2>
                    <div style={{border:"2px solid white",width:"500px",placeItems:"center"}} className="display-box">
                    <ul>{this.renderItems()} </ul>
                    </div>
                </div>
                <div>
                    <h2>Display based on User Type</h2>
                    <div style={{border:"2px solid white",width:"500px",placeItems:"center"}} className="display-box">
                    <ul>{this.renderItemsByUserType()} </ul>
                    </div>
                </div>        
                <div>
                    <h2>Filter all data starting with J</h2>
                    <div style={{border:"2px solid white",width:"500px",placeItems:"center"}} className="display-box">
                    <ul>{this.renderItemsStartingWithJ()} </ul>
                    </div>
                </div>        
                <div>
                    <h2>Filter all data based on age greater than 28 and age less than or equal to 50</h2>
                    <div style={{border:"2px solid white",width:"500px",placeItems:"center"}} className="display-box">
                    <ul>{this.renderItemsByAge()} </ul>
                    </div>
                </div>        
                <div>
                    <h2>Find the total years of the designers</h2>
                    <div style={{border:"2px solid white",width:"500px",placeItems:"center"}} className="display-box">
                    <ul>{this.renderItemsByExperience()} </ul>
                    </div>
                </div>        
            </center>
            </>
            )
    }

}

// display all items

export default HigherOrderFunctions