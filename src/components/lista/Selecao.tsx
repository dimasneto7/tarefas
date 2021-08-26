interface SelecaoProps {
  valor: boolean;
}

export default function Selecao(props: SelecaoProps) {
  const gradiente = props.valor
    ? "bg-gradient-to-br from-indigo-400 to-purple-900"
    : "";
  return (
    <div
      className={`
      flex justify-center items-center
      h-7 w-7 rounded-full cursor-pointer text-white
      border border-gray-400 ${gradiente}
      ${gradiente}
    `}
    >
      {props.valor ? "x" : ""}
    </div>
  );
}
