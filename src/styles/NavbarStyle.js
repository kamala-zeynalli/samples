

const styles = theme => ({
root: {
    width: '100%' ,
    marginBottom: 0
},
grow: {
    flexGrow: 1 ,
},
manuButton: {
    marginLeft: -12,
    marginRight:20
},
title: {
    display: 'none' ,
    [theme.breakpoints.up("sm")]:{
        display:"block"
    }
},
search: {
    position: "relative" ,
    borderRadius: theme.shape.borderRadius,
    backgroundColor:theme.pallete.common.white,
    // "&:hover":{
    //     backgroundColor: fade (theme.pallete.common.white, value =0.25),
    // },
    color: theme.pallete.common.black ,
    marginLeft:0,
    width: "100%",
    [theme.breakpoints.up("sm")] :{
        marginLeft: theme.spacing.unit,
        width:"auto",
    }
},
searchIcon :{
width: theme.spacing.unit * 9,
height:"100%",
position: "absolute" ,
display :"flex",
alignItems : "center",
justifyContent: "center",
} ,
 inputRoot :{
      color: "inherit" ,
      width : "100%"
 },
 inputInput : {
     paddingTop:  theme.spacing.unit,
     paddingRight:  theme.spacing.unit,
     paddingButtom:  theme.spacing.unit,
     paddingLeft: theme.spacing.unit *10 ,
     transition: theme.transition.create ( "width") ,
     width:"100%" ,
     [theme.breakpoints.up ("sm")] :{
         width: 120 ,
         "&:focus" :{
             width: 200 ,
         }
     }

 }

})
export default styles;