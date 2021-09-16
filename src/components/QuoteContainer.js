import React from "react";
import "../App.css";
import QuoteVote from './QuoteVote';
import Quote from './Quote';
// import quoteBox from './components/quote/quoteBox';

const QuoteContainer = () => {
        return(
            <div className="quoteBox">
                <div className="quoteVote">
                    <QuoteVote />
                </div>
                <div className="quote">
                    <Quote />
                </div>
            </div>
            );
        }

export default QuoteContainer;