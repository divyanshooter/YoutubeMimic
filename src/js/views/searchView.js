import { elements } from '../base';
export default class searchView
{
    constructor()
    {
        this.query;
    }
    getQuery()
    {
       this.query=elements.searchQuery.value;
    }
    giveQuery()
    {
     return this.query;
    }
    renderVideos(data)
    {
        const markup=data.map((curr,index)=>
        `<div class="video-body-content">
             <div>
                <video width="192" height="128" controls>
                <source src="./video/Video0059.mp4" type="video/mp4">
                Video ${index+1}
                </video>
            </div>
            ${curr}
      </div>`).join(' ');
        elements.videoList.insertAdjacentHTML('beforeend',markup);
    }
    clearSearch()
    {
        elements.searchQuery.value='';
    }
    clearVideo()
    {
        elements.videoList.innerHTML='';
    }
}
