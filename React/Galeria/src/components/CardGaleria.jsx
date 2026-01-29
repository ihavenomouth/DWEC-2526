
import { Card } from "flowbite-react";

export function CardGaleria({src, autor}) {
  return (
    <Card
      className="max-w-sm"
      imgAlt={"Imagen creada por " + autor}
      imgSrc={src}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {autor}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {"Imagen creada por " + autor}
      </p>
    </Card>
  );
}
