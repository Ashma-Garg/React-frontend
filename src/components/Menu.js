import React, {Component} from 'react';
import {Card, CardTitle, CardImg, CardImgOverlay,Breadcrumb,BreadcrumbItem} from 'reactstrap';
// import {Media} from 'reactstrap';
// import {DISHES} from '../shared/dishes';
import {Link} from 'react-router-dom';

// function RenderMenuItem({dish,onClick}){
  
// }

class Menu extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     // dishes: DISHES,
        //     selectedDish:null
        // };
    }
    // ClickedImage(dish){
    //     this.setState({
    //         dishes:DISHES,
    //         selectedDish: dish
    //     });
    // }

    // renderDish(dish) {
    //     if (dish != null)
    //         return(
    //             <Card>
    //                 <CardImg top src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                   <CardTitle>{dish.name}</CardTitle>
    //                   <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     else
    //         return(
    //             <div></div>
    //         );
    // }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1" key={dish.id}>
                {/* <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
                </Media> */}
                {/* <RenderMenyItem dish={dish} onClick={this.props.onClick}></RenderMenyItem> */}
                <Card onClick={()=> this.props.onClick(dish.id)} key={dish.id}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardImgOverlay>
                        <CardTitle style={{fontWeight:"700", fontSize:"1.5em"}}>
                          {dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
              {menu}
            </div>
          </div>
        );
    }
}

export default Menu;