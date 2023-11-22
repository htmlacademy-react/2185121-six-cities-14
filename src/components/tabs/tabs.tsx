import './tabs-style.css';
import { cityNames } from '../../common/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { cityChange } from '../../store/action';


function Tabs() {

  const currentCity = useAppSelector((state) => state.activeCity);

  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityNames.map((city) => {
            const classList = city === currentCity ? 'locations__item-link tabs__item locations__item-button tabs__item--active' : 'locations__item-link tabs__item locations__item-button';
            return (
              <li className="locations__item" key={city}>
                <button
                  className={classList}
                  onClick={() => dispatch(cityChange(city))}
                >
                  <span>{city}</span>
                </button>
              </li>
            );
          }
          )}
        </ul>
      </section>
    </div >
  );
}

export default Tabs;
