import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


:root{
    --body-color: #1E2735;
  --secondary-color: #005F60;
  --text-font-color: #FE8C03;
  --tertiary-color: #054C5A;
  
}


*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0
}

body{
    background-color: var(--body-color);
    -webkit-font-smoothing: antialiased;


}

body,input,button{
    font:18px ;
    font-family: 'Roboto Slab', serif;
}

#root{

    margin: 0 auto;
    padding:40px 20px;
 

}
button{
    cursor: pointer;
}

`;

//960px
/*
100vh


 */
