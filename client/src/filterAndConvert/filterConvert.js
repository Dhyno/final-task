import React from 'react'

export function filterDate(date) {

    const listMonth=['January','February','March','April','May','June','July','August','September','October','November','December']
    let today  = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    for( let i=0; i<date.length; i++){
        
    }
    return today.toLocaleDateString("en-US",options).replace(',',' ')
}

export function filterTitle(data){
    return data.slice(0,23)+'...';
}
