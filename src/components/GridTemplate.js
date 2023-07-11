import React from 'react';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import OutlinedCard from './OutlinedCard';


const data = [{heading:"Article Generator",content:"Turn a little and outline text into a fully complete high article within seconds"},
              {heading:"Content Rewriter",content:"Take a piece of content and rewrite it to make it more interesting, creative, and engaging"},
              {heading:"Paragraph Generator",content:"Generate paragraphs about any topic including a keyword and in a specific tone of voice"},
              {heading:"Talking Points",content:"Write short, simple and informative points for the subheadings of your article"},
              {heading:"Pros and Cons",content:"Write the pros and cons of a product, service or website for your blog article"},
              {heading:"Summarize Text",content:"Summmarize any text in a short and easy to understand concise way"},
              {heading:"Product Description",content:"Write the description about your product and why it worth it "},
              {heading:"Startup Name Generator",content:"Generate cool, creative, and catchy names for your startup in seconds"},
              {heading:"Product Name Generator",content:"Create creative product names from examples words"},
              {heading:"Academic Essay",content:"Create creative academic essays for various subjects just in a second"},
              {heading:"Creative Stories",content:"Allow Al to generate creative stories for you based on input text"},
              {heading:"Grammar Checker",content:"Make sure that there are no errors in your content"},
              {heading:"Summarize for second grader",content:"Summarize any complex content for a 2nd grader child"}];
function GridTemplate(){
     return (
        <div>
         <Box sx={{ flexGrow: 1 }}>
         <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            {data.map(ele=>{
               return( <Grid item xs={3}>
       
       <OutlinedCard heading={ele.heading} content={ele.content}/>
       
     </Grid>
               );
            })}
            </Grid>
            </Box>
        </div>
     )
}

export default GridTemplate;