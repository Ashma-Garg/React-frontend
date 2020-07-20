import React, {Component} from 'react';
import {Card, CardTitle, CardImg, CardImgOverlay,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class Menu extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1" key={dish.id}>
                {/* can be written as:
                `/menu/${dish.id}`
                or
                "/menu/`${dish.id}`" */}
                
                <Card onClick={()=> this.props.onClick(dish.id)} key={dish.id}>
                <Link to={`/menu/${dish.id}`}><CardImg width="100%" src={dish.image} alt={dish.name}></CardImg></Link>
                    <CardImgOverlay style={{height:"10px"}}>
                        <CardTitle style={{fontWeight:"700", fontSize:"1.5em"}}>
                          {dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>
                
                {/* </Link> */}
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