export const Greet = ({ name, heroName }) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

// destrukturing props and state
// export const Greet = ({props}) => {
//   const {name, heroName} = props
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };
