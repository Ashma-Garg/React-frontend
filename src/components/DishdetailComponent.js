import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardImg, CardText
    // ,Breadcrumb,BreadcrumbItem
} from 'reactstrap';
// import {Link} from 'react-router-dom';


class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    DisplayDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardTitle style={{fontWeight:"700", fontSize:"2em"}}>{dish.name}</CardTitle>
                    <CardImg top src={dish.image} alt={dish.name} style={{height:"50vh",padding:"10px",borderRadius:"5px"}} />
                        <CardBody>
                          
                          <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
            }
            else{
                return(
                    <div></div>
                );
            }
    }
    DisplayComments(comments){
        if(comments!=null){
            return(
                <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {this.DisplayComment(comments)}
                </ul>
            </div>
            );
        }
    }
    DisplayComment(comments){
                    return(
                        <div>
                        <li key={comments.id}>
                            {comments.comment}
                        </li>
                        <p>--{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                        </div>
                
            );
            // return(
            //     <div></div>
            // );

    }
    render(){
        return(
            <div className="container">
            {/* <div className="row">
            {this.props.dish?
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>:null}               
            </div> */}
            <div className="row">
            <div className="col-12 col-md-8 m-1">
                {this.DisplayDish(this.props.dish)}
                {/* this.props.renderDish.name; */}
            </div>
            <div className="col-12 col-md-3">
                        {this.DisplayComments(this.props.comments)}
            </div>
            </div>
            </div>
        );
    }
}

export default DishDetail;