

let primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary");
let colorLabel = getComputedStyle(document.documentElement).getPropertyValue("--bgHeader");


// ======= Area Chart  =========== //


let defaultOption = {
    chart: {
        tollbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
       
    },  

    dataLabels: {
        enabled: false,
    },
};


let barOptions = {
    ...defaultOption,
    

    chart: {
        ...defaultOption,
        type: 'area',
        height: 190,
    },

    tooltip: {
        enabled: true,
        

        y: {
            formatter: value => `${value}k`,
        },
    },
    series: [
        {
            name: "الاستخدام",
            data: [15, 90, 60, 50, 90, 50, 41, 40, 20, 50, 30, 70]
        }
        
    ],

    colors: [primaryColor],

    fill: {
        type: 'gradient',
            gradient: {
            opacityForm: 1,
            opacityTo: 0,
            stops: [0, 100],
            
        },
    } ,

    stroke: {
        colors: [primaryColor], 
        lineCap: "round"
    }, 

    grid: {
        borderColor: "#E5E5EF",
        padding: {
            top: -20,
            right: 0,
            bottom: -8,
            left: 12,

        },
    },

    markers: {
        strokeColors: primaryColor,
            hover: {
            strokeColors: primaryColor,
            size: undefined,
            sizeOffset: 7
            }
        
    },

    yaxis: {
        show: false,
    },
    

    xaxis: {
        labels: {
            show: true,
            floating: true,
            style: {
                colors: "#9291A5",
                fontFamily: "Noto Kufi Arabic",
                

            },
            
        },

        axisBorder: {
            show: false,
        },

        crosshairs: {
            show: true,
            opacity: 1,
            position: 'front',
            stroke: {
                color: primaryColor,
                width: 2,
                dashArray: 0
            }
        },

        categories: ["ديسمبر" ,"نوفمبر" , "أكتوبر" , "سبتمبر","أغسطس","يوليو","يونيو", "مايو" , "ابريل" , "مارس"  ,"فبراير","يناير"]
    },

};


let chart = new ApexCharts(
    document.querySelector('.myChart'), barOptions
)

chart.render()



