import {elements } from './base';
import  searchView from './views/searchView';
import search from './models/search';
const state={};
const searching=async ()=>{
    
    //get the value from the uI
    console.log('clicked');
    const SearchView=new searchView();
    SearchView.getQuery();
    state.query=SearchView.giveQuery();
    SearchView.clearSearch();
    SearchView.clearVideo();
    
    // console.log(query)
    if(state.query)
    {
      elements.searchIcon.classList.remove('animation-searching');
      state.Search=new search(state.query);
      state.result=await state.Search.getResult(state.query);
      // console.log(state.result);
      SearchView.renderVideos(state.result);
      
    }
   

    //upadate the ui for searchresults
};
const EventHandlers=()=>{
  elements.searchIcon.addEventListener('click',searching);
  
  document.addEventListener('click',function(event){
    if(event.target.id!=='searchBar')
      {
        elements.searchIcon.classList.remove('animation-searching');
      }
    else
    {
        elements.searchIcon.classList.add('animation-searching');
        
        
    }  
    if(event.target.id!=='videoicon')
    {
      elements.videoIconMenu.classList.remove('icon-menu-display');  
    }
    if(event.target.id!=='menuicon')
    {
      elements.menuIconMenu.classList.remove('icon-menu-display');  
    }
    if(event.target.id!=='messageicon')
    {
      elements.messageIconMenu.classList.remove('icon-menu-display'); 
    }
    if(event.target.id!=='threedotsicon')
    {
      elements.threedotsIconMenu.classList.remove('icon-menu-display');
    }
    
   
});
 document.addEventListener('keypress',(event)=>{
     if((event.keyCode===13) ||(event.which===13))
      {
        searching();
      }
 });
 elements.videoIcon.addEventListener('click',()=>{
     elements.menuIconMenu.classList.remove('icon-menu-display'); 
     elements.messageIconMenu.classList.remove('icon-menu-display'); 
     elements.threedotsIconMenu.classList.remove('icon-menu-display');
     elements.searchIcon.classList.remove('animation-searching');
     elements.videoIconMenu.classList.toggle('icon-menu-display');
     
     
 });
 elements.menuIcon.addEventListener('click',()=>{
  elements.videoIconMenu.classList.remove('icon-menu-display');
  elements.messageIconMenu.classList.remove('icon-menu-display'); 
  elements.threedotsIconMenu.classList.remove('icon-menu-display');
  elements.searchIcon.classList.remove('animation-searching');
  elements.menuIconMenu.classList.toggle('icon-menu-display');

 });
 elements.messageIcon.addEventListener('click',()=>{
  elements.videoIconMenu.classList.remove('icon-menu-display'); 
  elements.menuIconMenu.classList.remove('icon-menu-display');
  elements.threedotsIconMenu.classList.remove('icon-menu-display');
  elements.searchIcon.classList.remove('animation-searching');
  elements.messageIconMenu.classList.toggle('icon-menu-display');
 });
 elements.threedotsIcon.addEventListener('click',()=>{
  elements.videoIconMenu.classList.remove('icon-menu-display'); 
  elements.menuIconMenu.classList.remove('icon-menu-display');
  elements.searchIcon.classList.remove('animation-searching');
  elements.messageIconMenu.classList.remove('icon-menu-display');
  elements.threedotsIconMenu.classList.toggle('icon-menu-display');
 });

  elements.humburger.addEventListener('click',()=>{
       elements.toggled.classList.toggle('container');
       elements.toggled.classList.toggle('toggled-container');
       elements.toggleMenuDiv.classList.toggle('menu');
       elements.toggleMenuDiv.classList.toggle('menu-display');
       elements.toggleMenu.classList.toggle('toggled-menu');
       elements.toggleMenu.classList.toggle('menu-display');
       
  });
}

EventHandlers();



