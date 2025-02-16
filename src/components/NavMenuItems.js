const LastiEbatMenuLabels=["18x7-8", "21x8-9","23x9-10","23x10-12","27x10-12", "28x9-15","250-15","300-15","400-8","500-8","600-9","650-10","700-12", "700-15","750-10","750-15","750-16","825-25","900-20","1000-20","1100-20","1200-20"]
const markaMenuLabels=["GRECKSTER","SOLİDEAL"]
const lastikcesitMenuLabels=["Havalı","Dolgulu","Çemberli","İz Bırakmayan Lastik"]
const NavMenuItems = [{
  key: 'sub1',
  label: 'Forklift Lastik Ebatları',
  children: 
    LastiEbatMenuLabels.map((label,index)=>({
      key: index,
      label: label 
        }))},
    
    {
      key: 'sub2',
      label: 'Forklift Lastik Markaları',
      children: 
     markaMenuLabels.map((label,index)=>({
        key: index+"sub2",
        label: label 
          }))},
    {
      key: 'sub4',
      label: 'Forklift Lastik Çeşitleri',
      children: 
      lastikcesitMenuLabels.map((label,index)=>({
        key: index+"sub4",
        label: label 
          }))},

  ];

  export  {NavMenuItems}
