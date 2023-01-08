
class Object{
    constructor(){
        this.components = [];
        
        AddObject(this);
    }

    Awake(){
        this.components.forEach(component => {
            try{
                component.object = this;
                component.ExecuteAwake();
            }
            catch{
                // no awake function found
            }
        });
    }

    Start(){
        this.components.forEach(component => {
            try{
                component.ExecuteStart();
            }
            catch{
                // no start function found
            }
        });
    }

    Update(){
        this.components.forEach(component => {
            try{
                component.ExecuteUpdate();
            }
            catch{
                // no update function found
            }
        });
    }

    // Functions
    AddComponent(component){
        this.components.push(component);
    }

    RemoveComponent(component){
        this.components.slice(component);
    }

    GetComponent(component){
        this.components.forEach(x =>{
            if(x.constructor.name === component){
                return(component);
            }
        });

        return false;
    }

    GetAllComponents(){
        var allComponents = [];

        this.components.forEach(x =>{
            allComponents.push(x);
        });

        return allComponents;
    }
}