import React from 'react';

export default function ProductListItem(props) {
    return <div>
        <h3>{props.name}</h3>
        {/* <img height={100} title={props.name} src={``}/> */}
    </div>
}

export default {
    props: ["nextUrl"],
    data() {
        return {
            name: "",
            description: "",
            location: '',
            price: '',
            image: '',
            type: '',
        };
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            const product = {
                name: this.name,
                description: this.description,
                location: this.location,
                price: this.price,
                image: this.image,
                type: this.type,
            };
            const options = {
                method: "post",
                headers: {
                    Accept: "applications/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            };
            const request = new Request("http://localhost:8000/product", options);
            fetch(request)
                .then(res => {
                    console.log(res);
                })

        }
    }
};