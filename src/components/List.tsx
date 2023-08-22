import { Sub } from "../types";

interface Props {
  subs: Array<Sub>;
}

const List = ({ subs }: Props) => {
  // Esto es simplement un ejemplo
  const renderList = (): JSX.Element[] => {
    return subs.map((sub) => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
          <h4>
            {sub.nick} (<small>{sub.subMonths}</small>)
          </h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

// Importante especificar el tipo React.FunctionComponent.
// Por defecto coge JSX.Element (se utiliza en componentes class) que no admite "children"
// Tabién se acepta la forma abreviada React.FC
// const List: React.FunctionComponent<Props> = ({ subs }) => {
//   return (
//     <ul>
//       {subs.map((sub) => {
//         return (
//           <li key={sub.nick}>
//             <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
//             <h4>
//               {sub.nick} (<small>{sub.subMonths}</small>)
//             </h4>
//             <p>{sub.description?.substring(0, 100)}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

export default List;
