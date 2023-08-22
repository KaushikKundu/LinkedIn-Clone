import React from 'react';
import { FiberManualRecord, Info } from '@mui/icons-material';
import "./widgets.css"
const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-article-left">
                <FiberManualRecord/>
            </div>
            <div className="widgets-article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return ( 
        <div className="widgets">
            <div className="widgets-header">
                <h2>LinkedIn News</h2>
                <Info/>
            </div>
            {newsArticle("Tesla hits new highs","Cars & auto - 300")}
            {newsArticle("Crypto crashes again","Market stock dropped 20%")}
            {newsArticle("Tech hiring starts","Microsoft hires 10k graduates")}
            {newsArticle("Reliance offers free Netflix","Two prepaid plans with free subscription")}
            
        </div>
     );
}
 
export default Widgets;