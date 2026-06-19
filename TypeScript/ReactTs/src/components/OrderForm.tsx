import React, { useState } from "react";

interface OrderFormProps {
    onSubmit(order: {
        name: string;
        cups: number
    }): void
}

const OrderForm = ({onSubmit}: OrderFormProps) => {

    const [name, SetName] = useState<string>("Masala");
    const [cups, setCups] = useState<number>(1)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        onSubmit({name, cups});
    }

  return (
    <form
        onSubmit={handleSubmit}
        style={{margin: "10px"}}
    >
        <label>Chai Name</label>
        <input
            value={name}
            onChange={
                (e: React.ChangeEvent<HTMLInputElement>) => SetName(e.target.value)
            }
        />

        <label>Cups</label>
        <input
            type="number"
            value={cups}
            onChange={
                (e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)
            }
            // Here in onChange needs to typecast in number, as it is accepting as number because in useState, for cups, we specify it for accepting numberic value
        />

        <button type="submit">
            Place Order
        </button>
    </form>
  )
}

export default OrderForm
