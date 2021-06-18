import React, {CSSProperties} from "react";

const panelWrapperStyle:CSSProperties = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    boxShadow: '0px 0px 6px -2px #00000073',
    borderRadius: '4px',
    boxSizing: 'border-box',
    padding: '5px 5px'
}

const buttonWrapper:CSSProperties = {
    width: '24px',
    height: '24px',
    cursor: "pointer",
    margin: '2px 0',
    border: '1px solid #b8b8b8',
    borderRadius: '2px'
}

const buttonIcon:CSSProperties = {
    width: '100%',
    height: '100%',
    padding: '4px',
    boxSizing: 'border-box'
}

const panelConfig = [
    {
        base: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIibXWvS4EURQA4G/9FApEoREdWr1CyQNoVRqJQiPxBootFQpvsA/AC+g1GomOSkTiJ5Gwa+1VzMhMZGZ2J7P3VjfnTs53TuZmzlC+2mhVnDdeAeeYiAkEdDAdAxjkkEvMxAQCrjAXEwi4xuK4gJ8CIOAWyzGBgHusxQQCHrHeBOgPAQJesBETCPjAVkwg4As7dYHvGkBIC9r7n2SqAghDCujhWfKyn9L9ChbwOkoHvYpqO6MkqAuc4S7dd7HUFOjmkp+kscNcrD0OYIDjXGwWbynwjvkmwCf2C+Knsi6OmgBl93pV9hl5EGkYXci62I0BbOeAGxF+DlqSufCHbJY9ONkA6Utu2YFknBauX9Juj6mehxfDAAAAAElFTkSuQmCC'
    },
    {
        base: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB00lEQVRIieXVS4iOURgH8J+5qfnIZQYLm9mor7CxULIgoaQspibEUiPZyCULS0pTFmxENjZCYTNfzWw0C8psbEZDWJBcljRuadwW5335nO+cz+RrVv711nmfy///nud5znmZZcyJ3ueiH6vwHsOYzOR2YH7GN40PZVCJKmp4iDtYihFcxfEEyRnsLokiLC/yp+q//Cn2RIELcQ+DCZKL2JvZwXP0Qlth6McjXIkC32F/ZgczQimwGnczMQ/Qg3mtCExhSSamG5343IrAMHYKNY+xD6P49i8C5RRNCtMyItR8ApWC/Ag2ZPLX4kvC3l0u4nMwKDS0RyjLKI7iWYJkO3ZkhD/hGL5m/Cpozzn/L8Q9KNFuZlOzTeMATOOUovmpOnfgvnDHTPxF4EYR+xpvi2cAL/Ekl3QQ43ih+entk56uQVzKJS3CK6zAeZxsInAI5xL2ZXjj9yH+A2cxVKwXC1vtywiMYVPGN451sbFaEC6osx3GtQRBl9DElQlfG27iROyoabz3u/AY6xNEu4RyDtTZeoXTXxMq8GtMt+I6Dmgcz81YI9w7PyJfVZik27iFy0KDT5expcBG4feXw0fhTvqe8FVwAVsKjrEmPC2hc7aIm+IncL1Yv4dy+XoAAAAASUVORK5CYII='
    },
    {
        base: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACWElEQVRoge3ZO2tUQRiH8V9UvIfgBRGMhRBB4qqFoDGmEATF0sJO/ASCFoKFEPwKFjZKFBGEFJZWNoJYKBoEFa28kChEBU2UKGg8FpPFze657CZ4Zot9YGB3i8Pzn/POy8ssHTp0aGfW4jpmMIbdcXVaoxdPkdSssahGLbAX782XT/AtplSzHMd3jfIJrkX0aoozmJUu/xw98dTyWYbL0sUTfMDWaHYFdOOObPkZ7ItmV8A2vJAtPyucibZkAJOy5ROci2ZXwAmhNPLkR6LZ5dCF87I7TXXdw/JIjpmswA354gleYl0kx0zWC7taJP8ZfZEcM+nDK8XyPzAYyTGTIXxSLP8HJyM5ZrIGE4rlEwxHckxliTAKQ0Vxr78pdKe2YCVu4SN2zf22Q5hl0uTvC92pLdiMR/7JFYV4jU3la6ZTwVuNO5wVYgo7y9dM5wi+yq7x+hDvcLh8zXS6Zdd37ZoU3hKhO0Wngv6az0Wdphqit+FJJbMRl/BL852mum4LLTYKq4Qpckp+fWeFeCxS6XQJs/ubDLFmQkxgS6nWcwzggeLazgsxjT2lWgudZTRHNu+QVnt7RQhxrEzxKiMZgq2G6C7Vuob6g7qQEP0NT/1PpLW1xU6GG7B0kc9YFM+EnbwrlMOg1t7AlfKV5zMstM4qBzQvPy1MpW3BalzET80HuBDFNIWjGNda6YwLoduCg4ovn+rXqSimOZw1X/A39gs3DWmzTrRBLY/TwuSZCLdqhFGhPsChKHZNMoQn2D73vf56cDSS14LowUN8EVrmVeGv0A4dOkTiL65BfzGT8sUjAAAAAElFTkSuQmCC'
    },
    {
        base: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA50lEQVRIieWUQQrCMBBFH9QLiBuh3sJNPUKvJbgWT6AoFTyEnkB050LvYO0J6iIJhtK0kxAX4ofZtNP3p7+Zwj8qAVbACzgBaWz4DqitegCTb8GjmXTBbZOguCRwU3dfkwQohHBvkxC4qaMPvAI2ngalDzzT1xceBssu+LYFbjQXwA/AIAQuMXHCQa2/gc9cTVptcRV6SKcq3Zj3wI3WPnBQP64aOAPDnt7MGkgEB7UcD4FJENxoDNz0wxdg1Lg/BZ4IPqjU5GqZRIEbNePK+cSyxzMWl+w3EZ3zEKWo01Wi9iTK5L+lN6AlnrzeN2TGAAAAAElFTkSuQmCC'
    },
    {
        base: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABF0lEQVRIid3UvUrDYBTG8R/agqAurrY34lgXNzt00JvoJmq9BDfvwM0LkHoNHZ06aK/Aj8Wx0DgkwRDz8rZJC+IDh4Tk5fmfPCcc/rvaOMM9ZvjEF6Z4wCladc0HeEUSqRccr2K8jduSyTV2MQpAFrhcFlA2T7CXvduPQC9i5oNAh6MMchOBznEUMm/7yTwWSQiaYBICnEe6W6V6uelWAXBSuB9mkGGom4j6VQ9nNbutivS5CvDRAFCO9D03LUa0k12Lw1tW5UgPqg5NA93UrV9fkOfWdMBB9et2uaxa0sVVZfSIQ3Qwrgsg3YqLCkCncKbbBABXmwaQbsV5wWicQbp4WgeAdCtOrHHIIfVwJ/2N3zYB+Nv6BlfbvtT8lNtYAAAAAElFTkSuQmCC'
    },
    {
        base: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAYElEQVRoge3VQQ6AIAwEQPT/f9YzCSHVEK115lgoZC9tawBAHdvk7Bjcy1Tr7KMiQFrR8Rt950rP3b7a47dMEOAnVu2RyB+r3+uUGb+CALziiYW4moX4CYJkUyYIAFDJCSxyDht5FeOnAAAAAElFTkSuQmCC'
    },
    {
        base: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAoElEQVRIie3SMQrCQBBG4U8FQWytxBtYWorXSC14H69g6R08gCDY2nsIxTIWpohrEhIxJGAeLCwz/POKGTqappf6x3XM7v946Af/I1hiVaeg7/0gStPaK7ohwr1KKM5554xalGTWBblSggMG2Kdq2yC3+1ZwxSTpjXDCEcMgN8alquCBRdCfYZoVxNxrL6UFm5xBRYT7QIvPtDS1Czqa5wlfyUBlTMYcagAAAABJRU5ErkJggg=='
    },
    {
        base: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACpklEQVRoge2ZP28TMRjGfyBEEwkkmqk0CBgrBFO7UTaY+QhQ2NpuBYTamQ5IdGCBLwEtH6JqCyodKRsUBApLQ6iURkI6Bvt0rrEvPp8vl0j3SK8i+fHre57zn7MdqFChQmicBRaBbeBIxhawILmhxiSwB0SW+CjrDCXGEAJt4uPYZUh7YpFE5DGwBFyU8UiWxfxCSRpTsU0icMnAP1b4rQHqcsYfEoETBn5C4TuDELQKdOk/pouOLvDMJvJUSnkHOJfddyE4As6biNOWhAh4iZh4ZeMYocUIWw+YEHnmZUHmZ9h6YGRQGSgblQENLxDr9nMDt4pYDq1retFQPy429CTfS+HSlmaXZ5xA6GU0rU7efCNGfg6cKVuAhjrQAK4V0bjL+EyrE5dvhpfmhrwGesA8ybBtAA+ADWCf5Py8D6wDc8B4COEu4lzq3JK/dWAF+K3VN0UbWJY5uZHXAIgD/XsH4XrsAZfLNnAJ+O4hPo5vQLMsA3XEbUTe09kHoFaGgRWNuwlMA60UsS1ZZ1YrfzpoAw3+n7DTkrtuMdGSHMCMxrXxXJ18DTw0CPwF3JD8FPAjhftpyL8/SAMbBgH6W457wlRmyn07SAOfLSJMJlzER4iPXSEG4nukrlLWSRGim3ARH6FcjIXeja4htgNrgdsNApceMGGkhpAJ647is0ziNz4G/ioNZLnfn3MU78LFcc/HwIHSwO0MeQ3ExyfUh+wQuOBj4LXSyBfgDu49sayJmJXC+m0lZhDbcLX8iY94gKv0XxL12ESsdDXERixLril2yLGZA/HWXQ4iaszL3CZiS+wr/oBAfxBeAV4BXzk5sW3RIzmNNfHriZ1Q4kOghtgS6xPbFIeIMT9ma6yoe34XjAN3ZUwhTmwgTm2fgHcy2qWoq+CIf5paF5s8w9buAAAAAElFTkSuQmCC'
    }
];

const Panel = () => {
    return (
        <div style={panelWrapperStyle}>
            {
                panelConfig.map(({base}) => {
                    return (
                        <div style={buttonWrapper}>
                            <img style={buttonIcon} src={base} alt=""/>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Panel;