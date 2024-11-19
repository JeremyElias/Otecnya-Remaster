// src/components/AvatarComponent.jsx
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"; // Asegúrate de que el path sea correcto

export function AvatarComponent({ src, alt, fallbackText }) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
}
