import React from 'react'
import {useState, useEffect} from 'react' 
import { gql, HttpLink, InMemoryCache, ApolloClient } from 'apollo-boost';
import {Typography, Button, TextField, Container , Grid , MenuItem} from '@material-ui/core'

export default function CakeBuilder() 
{

    const [toppings,setToppings] = useState([])
    const [bases, setBases] = useState([])
    const [icingDesigns, setIcingDesigns] = useState([])

    const [selectedBase,setSelectedBase] = useState({
                                                        CakeItemName : ""
                                                    })
    const [selectedTopping,setSelectedTopping] = useState({
                                                        CakeItemName : ""
                                                    })
    const [selectedIcingDesign, setSelectedIcingDesign ] = useState(
        {
            CakeItemName : ""
        }
    )
    
    function handleChangeBase(e)
    {
        //console.log( e.target.value)
        setSelectedBase(e.target.value)
        console.log(selectedBase)
    }

    function handleChangeTopping(e)
    {
        setSelectedTopping(e.target.value)
        console.log(selectedTopping)
    }

    function handleChangeIcingDesign(e)
    {
        setSelectedIcingDesign(e.target.value)
        console.log(selectedIcingDesign)
    }


            const ALL_CAKES = gql`
                    query {
                            cakeItems {
                                CakeItemID
                                CakeItemName
                                Price
                                Category
                                SoldItems
                            }
                        }
            ` 

            //Creating Client
            const cache = new InMemoryCache();
            const link = new HttpLink({
                uri: 'https://nuhaprismadb-e9e96b51e5.herokuapp.com/nuha-graphql/dev',
            })
            const client = new ApolloClient({
                cache,
                link,
                connectToDevTools: true
            })

            client.query({
                query : ALL_CAKES,
            })
            .then(
                (data) => 
                {
                    console.log(data.data.cakeItems)
                    data.data.cakeItems.map
                    (
                        (cake) =>
                        {
                            switch(cake.Category)
                            {
                                case 'BaseLayer' : console.log("Base item")
                                              let x = bases
                                              x.push(cake)
                                              console.log(x)
                                              setBases(x)
                                              break;
                                case 'IcingDesign' : console.log("Base item")
                                                     let y = icingDesigns
                                                     y.push(cake)
                                                     setIcingDesigns(y)
                                                     break;
                                case 'Topping' : 
                                                 let z = toppings
                                                 z.push(cake)
                                                 setToppings(z)
                                                 break;
                                default : console.log("Impossible")
                            }                        
                        }
                    )
                        

                }
            ).catch
            (
                (err) =>
                {
                    console.log(err)
                }
            )

       
    

    return (
            <Container>
                <Grid container>
                    <Grid item xs = "12">
                        <br/>
                    </Grid>
                    <Grid item xs = "12">
                        <Typography variant = "h2">
                                Cake Price Calculater
                        </Typography>
                    </Grid>
                    <Grid item xs = "12">
                        <hr/>
                    </Grid>
                    <Grid item xs = "12">
                        <TextField
                            select
                            fullWidth
                            variant = "outlined"
                            label = "Base"
                            onChange = {handleChangeBase}
                            >
                            {
                                bases.map(
                                    (base) =>
                                    {
                                        return (
                                            <MenuItem
                                                key = {base.CakeItemID}
                                                id = {base.CakeItemID}
                                                value = {base}
                                            >
                                                {base.CakeItemName}
                                            </MenuItem>
                                        )
                                    } 
                                )
                            }
                               
                        </TextField>
                    </Grid>
                    <Grid item xs = "12">
                        <br/>
                    </Grid>
                    <Grid item xs = "12">
                        <TextField
                            select
                            fullWidth
                            variant = "outlined"
                            label = "Topping"
                            onChange = {handleChangeTopping}
                            >
                            {
                                console.log("Toppings", toppings)
                                /*
                                toppings.map(
                                    (base) =>
                                    {
                                        return (
                                            <MenuItem
                                                key = {base.CakeItemID}
                                                id = {base.CakeItemID}
                                                value = {base}
                                            >
                                                {base.CakeItemName}
                                            </MenuItem>
                                        )
                                    } 
                                )
                                */
                            }
                               
                        </TextField>
                    </Grid>
    
                </Grid>
        </Container>
        
    )
}
