
const LastiEbatMenuLabels=["18x7-8", "21x8-9","23x9-10","23x10-12","27x10-12", "28x9-15","250-15","300-15","400-8","500-8","600-9","650-10","700-12", "700-15","750-10","750-15","750-16","825-25","900-20","1000-20","1100-20","1200-20","140/55-9","15x4 1/2-8","16x6-8","200/50-10","10 1/2x5x6 1/2","16x6x10 1/2","16 1/4x7x11 1/4","18x8x12 1/8","21x7x15","21x8x15",]
const lastikcesitMenuLabels=["Havalı","Dolgulu","Çemberli","İz Bırakmayan Lastik"]
const NavMenuItems = [{
  key: 'sub1',
  label: 'Forklift Lastik Ebatları',
  children: 
    LastiEbatMenuLabels.map((label,index)=>({
      key: label,
      label: label 
        }))},
    
    {
      key: 'sub4',
      label: 'Forklift Lastik Çeşitleri',
      children: 
      lastikcesitMenuLabels.map((label,index)=>({
        key: label,
        label: label 
          }))},

  ];

  export  {NavMenuItems}