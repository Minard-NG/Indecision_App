import React from 'react';
import AddOption from './components/AddOption';
import Options from './components/Options';
import Action from './components/Action';
import Header from './components/Header';
import OptionModal from './components/OptionModal';
import 'normalize.css/normalize.css';
import './styles/style.scss'; 

class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    }
    
    handleModal = () =>{
        this.setState(() => ({
            selectedOption: undefined,
        }))
    }
    handlePick = ()=>{
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleDeleteOptions = ()=>{
        this.setState(() => ({ options: [] }));
    } 
    handleDeleteOption= (optionToRemove)=>{
        this.setState((prevState)=>({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option; 
            })
        })) 
    }
    handleAddOption= (option)=>{
        if(!option){
            return 'Enter valid value to add item'
        }  else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }

    componentDidMount(){
        try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if(options){
            this.setState(()=>({ options }));
        }
        }catch(e){
            //Do nothing at all
        }

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !==  this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    } 
    
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one','Thing two','Thing three'];
        return(
            <div>
            <Header  title={title} subtitle={subtitle}/> 
             <div className="container">
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
            <div className="widget">
            <Options handleDeleteOption={this.handleDeleteOption} options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption 
                handleAddOption={this.handleAddOption}
                    
                />
                </div>
                </div>
                <OptionModal
                    handleModal = {this.handleModal}
                    selectedOption={this.state.selectedOption}
                />
        </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: [],
}

export default IndecisionApp;

 