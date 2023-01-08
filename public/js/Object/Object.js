
class Object{
    constructor(_position){
        this.position = _position;

        this.components = [];
    }

    Awake(){
        this.components.forEach(component => {
            try{
                component.ExecuteAwake();
            }
            catch{
                component.ExecuteAwake();
            }
        });
    }

    Start(){
        this.components.forEach(component => {
            try{
                component.ExecuteAwake();
            }
            catch{
                component.ExecuteAwake();
            }
        });
    }

    Update(){
        this.components.forEach(component => {
            try{
                component.ExecuteUpdate();
            }
            catch{
                component.ExecuteUpdate();
            }
        });
    }

    // Functions
    AddComponent(component){
        this.components.push(component);
    }

    RemoveComponent(component){
        this.components.pop(component);
    }
}