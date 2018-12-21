import React, { Component } from 'react';



class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          UserID: this.props.location.data
          
        };
      }

     

      componentDidMount(){
          console.log("this is it"+this.state.UserID)
      }

    

      

   
    render() { 
        return ( 

            <div>Heloooooooooooooooooooooooooooo

           
            </div>
         );
    }
}
 
export default Profile;





// const Profile = () =>{
//     return(
//         <div>
//             <p>
//                 You are in profile
//             </p>
//         </div>
//     );

// };

// export default Profile;