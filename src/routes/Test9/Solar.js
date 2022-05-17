import { cssSpace, cssSun, cssPlanet } from './style';

const Solar = ({ planets }) => {
  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      <div className={cssSun}>
        {Array.from({ length: planets }).map((_, idx) => (
          <div key={idx} className={cssPlanet(idx + 1)} />
        ))}
      </div>
    </div>
  )
};

export default Solar;
