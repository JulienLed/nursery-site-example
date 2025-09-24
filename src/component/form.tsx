"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    questionTitle: "",
    questionText: "",
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setMessage((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    const { name, surname } = await response.json();
    alert("Vous auriez reçu un mail de la part de " + name + " " + surname);
  };
  return (
    <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
      <section className="grid grid-cols-2 gap-5">
        <Label htmlFor="name">Votre Nom: </Label>
        <Input
          id="name"
          placeholder="Dupond"
          type="text"
          onChange={(e) => handleChange(e)}
          className="!border-accent"
          required
        ></Input>

        <Label htmlFor="surname">Votre Prénom: </Label>
        <Input
          id="surname"
          placeholder="Jean"
          type="text"
          onChange={(e) => handleChange(e)}
          className="!border-accent"
          required
        ></Input>

        <Label htmlFor="email">Votre adresse email: </Label>
        <Input
          id="email"
          placeholder="jeandupond@example.be"
          type="email"
          onChange={(e) => handleChange(e)}
          className="!border-accent"
          required
        ></Input>

        <Label htmlFor="phone">Votre numéro de téléphone</Label>
        <Input
          id="phone"
          placeholder="010861220"
          type="tel"
          onChange={(e) => handleChange(e)}
          className="!border-accent"
        ></Input>
      </section>

      <Label htmlFor="questionTitle">Votre question: </Label>
      <Input
        id="questionTitle"
        placeholder="Quels marques de langes utilisez-vous ?"
        type="text"
        onChange={(e) => handleChange(e)}
        className="!border-accent"
        required
      ></Input>

      <Textarea
        id="questionText"
        placeholder="Décrivez ici votre question..."
        onChange={(e) => handleChange(e)}
        className="h-50 !border-accent"
        required
      ></Textarea>

      <Button
        type="submit"
        className="w-fit hover:scale-110 hover:bg-accent/80 bg-accent active:translate-y-0.5 text-base self-end font-bold rounded-2xl transition-all duration-200 ease-in-out"
      >
        Envoyer
      </Button>
    </form>
  );
}
