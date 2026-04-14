const porras = 
[
    {
        id: 1,
        email: "ciromartinezmartin@gmail.com",
        porra: "2-1"
    },
    {
        id: 2,
        email: "totallyRealEmail@gmail.com",
        porra: "2-1"
    },
    {
        id: 3,
        email: "alguien@gmail.com",
        porra: "3-3"
    }
]

export function getPorras(req, res) {
    console.log("Porras!")
    res.json({
        porras: porras
    })
}