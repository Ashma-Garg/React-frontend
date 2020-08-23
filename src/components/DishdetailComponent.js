import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardImg, CardText,Breadcrumb,BreadcrumbItem,Row,
     Label, Modal, ModalHeader, ModalBody, ModalFooter,Button,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm, Control, Errors} from 'react-redux-form';

// const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
// const minLength=(len)=>(val)=> (val) && (val.length>=len);
// const maxLength=(len)=>(val)=> !(val) || (val.length<=len);

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);

    }
    handleSubmit(values) {
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
        this.props.addComment(this.props.dish.id, values.rating, values.userName, values.message);
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    DisplayDish(dish){
        if(dish!=null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle style={{fontWeight:"700", fontSize:"2em"}}>{dish.name}</CardTitle>
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
        const com=this.props.comments.map((comment)=>{
            return(
                <div>
                <li key={comment.id}>
                    {comment.comment}
                </li>
                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            );
        });
            return(
                <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {com}
                </ul>
                <Button type="submit" onClick={this.toggleModal}>Submit Comment</Button>
            </div>
            );
    }
    
    render(){
        return(
            <div className="container">
            <div className="row">
            {this.props.dish?
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>:null}               
            </div>
            <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.DisplayDish(this.props.dish)}
                {/* this.props.renderDish.name; */}
            </div>
            <div className="col-12 col-md-5 m-1">
                        {this.DisplayComments(this.props.comments)}
            </div>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                <h4>Submit Comment</h4>
                </ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12}>Rating</Label>
                            <Col md={11}>
                                <Control.select
                                    // md={{size:11,offset:1}} 
                                    // style={{width:"100%"}}
                                    className="form-control"
                                    model=".rating" 
                                    name="rating" 
                                    id="rating" 
                                    palceholder="1" 
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="userName" md={12}>Your Name</Label>
                            <Col className="from-control">
                                <Control.text model=".userName" 
                                md={11} className="form-control" 
                                name="userName" id="userName" 
                                placeholder="Your Name"
                                validators={{
                                     minLength:minLength(3), maxLength:maxLength(15)
                                }}/>
                                <Errors 
                                    className="text-danger" 
                                    model=".userName" 
                                    show="touched" 
                                    messages=
                                    {{
                                     minLength: 'Must be greater than 2 characters', 
                                     maxLength: 'Must be 15 characters or less'
                                     }}
                                />
                                {/* <Errors
                                                className="text-danger"
                                                model=".lastname"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                             /> */}
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={{size:12}}>Comment</Label>
                            <Col className="from-control">
                                <Control.textarea model=".message" md={11}  className="form-control" name="message" id="message" rows="9"/>
                            </Col>
                        </Row>
                        <Row className="form-group" className="justify-content-center">
                                <Button color="primary" type="submit">Submit</Button>
                            
                        </Row>
                    </LocalForm>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
            </div>
        );
    }
}

export default DishDetail;