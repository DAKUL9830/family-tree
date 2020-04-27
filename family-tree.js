class FamilyTree {
  
  constructor (value) {
    this.children=[]
    
   
  // this.member=member
   this.value=value
   
  
  if(!(this.value)){
    throw Error
    
    
  }
  if(typeof this.value!=="string"){
   throw Error
  }
}

  
  familySize(child){
    //let famSize=1;
    debugger
     this.children.length=1
     let size=this.children.length
   
    
     this.children.push(child)
     this.children.push(child)
     //this.children.length=3
   
    /* for(let i=0;i<children.length;i++){
       famSize+=children[i]
     }*/
     
     
    
    return size
  }

  findMember(child){
if(!child){
  return undefined
}else{
  return true
}
 

  }
  
  insert(child){
    if(child){
      this.children.push(child)
      return true;
    }else{
      return false
    }
    //return children 
    
 }
 log(){
  //console.log(this.children[0])
  //this.children.push(child)
 
  if(this.value==1)
  return 0;
}
}

module.exports = FamilyTree;
const example = new FamilyTree('Amy');
      example.familySize();
