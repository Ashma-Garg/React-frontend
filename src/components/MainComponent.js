import React, {Component} from 'react';
import Menu from './Menu';
import Home from './Home';
import { connect } from 'react-redux';
import DetailDish from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import AboutUs from './AboutUs';
import { addComment } from '../redux/ActionCreators';
// import {Modal, ModalBody, ModalFooter,Button} from 'reactstrap';
import { Switch, Route, Redirect , withRouter} from 'react-router-dom';
// import {Navbar,NavbarBrand} from 'reactstrap';
const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotion: state.promotions,
      leaders: state.leaders
    }
  }
  const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  
  });
class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            isModalOpen:false
        };
        this.toggleModal=this.toggleModal.bind(this);
      }
      toggleModal(){
          this.setState({
              isModalOpen:!this.state.isModalOpen
          });
      }
    
      onDishSelect(dishId) {
        this.setState({ 
            selectedDish: dishId,
            isModalOpen:!this.state.isModalOpen
        });
      }
    render(){
        const HomePage = () => {
            return(
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotion.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
            );
          }
          const DishWithId = ({match}) => {
            return(
                // <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                //   comments={this.props.comments.filter((comment) => comment.id === parseInt(match.params.dishId,10))} />
                <DetailDish dish={this.props.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} 
                comments={this.props.comments.filter((comments)=> comments.dishId===this.state.selectedDish)}
                addComment={this.props.addComment} />
            );
          };
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={()=>
                    <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></Menu>} />
                    <Route exact path='/contactus' component={Contact}/>
                    <Route exact path="/aboutus" component={()=><AboutUs leaders={this.props.leaders}></AboutUs>}/>
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Redirect to="/home" />
                </Switch>
                {/* <div className="container"> */}
                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} style={{minWidth:'50%'}}>
                    <ModalBody>
                        <DetailDish dish={this.props.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} comments={this.props.comments.filter((comments)=> comments.dishId===this.state.selectedDish)} />
                    </ModalBody>
                    <ModalFooter>
                        <Button className="close" type="submit" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal> */}
                {/* </div> */}
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));