const company={
    people:[
        {id:1,name:"marx",position:"CEO",age:44},
        {id:2,name:"charles",position:"manager",age:38},
        {id:3,name:"zenden",position:"store keeper",age:25},
        {id:4,name:"manny",position:"security",age:40}
    ]
}
const button=document.querySelector("button")

button.addEventListener("click",(e)=>{
  e.preventDefault()

const for_name=document.getElementById("name")
const for_age=document.getElementById("age")
const  for_Id=document.getElementById("Id")
const div=document.querySelector("div")

const nameField = for_name.value
const ageField = for_age.value
const IdField = for_Id.value

const candidate={
    id:IdField,
    name: nameField,
    age: ageField

}

/*change worker operation*/

  company.people.forEach(person=>{
   if(person.id==candidate.id){
    Object.assign(person,candidate)
   }
})
//console.log(company.people)

company.people.forEach(person=>{
    let header=document.createElement("h2")
    header.innerText=person.name
    let para=document.createElement("p")
    para.innerText=person.position

     let para2=document.createElement("p")
     para2.innerText=person.age

     div.append(header,para,para2)
})
   localStorage.setItem("workers",JSON.stringify(company.people))

})