import React from 'react'; 

export default class HomePage extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            files: [],
            filesAdded: false
        }
    }
    componentDidMount(){
        let dirObj = require("./../json/dir.json");
        this.loopArr(dirObj)
    }

    loopArr(obj){
        obj.forEach((value, key)=>{
            if(value.directory.content.directories){
                this.loopArr(value.directory.content.directories);
            }
            value.directory.content.files.forEach((value, key)=>{
                this.state.files.push(value);
            });
        });
        this.setState({filesAdded:true});
    }

    check(){
        this.state.files.forEach((value, key) =>{console.log(value)});
    }


    render(){
        this.check();
        console.log(this.state.files);
        return(<div>Hello World</div>);
    }
}