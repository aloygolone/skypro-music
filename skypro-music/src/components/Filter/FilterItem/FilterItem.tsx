import classNames from "classnames";
import styles from "./FilterItem.module.css";
import { FilterItemType, TrackType } from "@/types";
import { order } from "../data";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setFilters } from "@/store/features/playlistSlice";

export default function FilterItem({
  handleFilterClick,
  title,
  value,
  isOpened,
  tracksData,
}: FilterItemType) {
  const authorsList = useAppSelector(
    (state) => state.playlist.filterOptions.author
  );
  const dispatch = useAppDispatch();
  const getFilterList = () => {
    if (value !== "order") {
      const array = new Set(
        tracksData?.map((track: TrackType) => track[value]) || []
      );
      return Array.from(array);
    }

    return order;
  };

  const toggleFilter = (item: string) => {
    dispatch(
      setFilters({
        author: authorsList.includes(item)
          ? authorsList.filter((el) => el !== item)
          : [...authorsList, item],
      })
    );
  };

  getFilterList();
  return (
    <>
      {isOpened ? (
        <div>
          <div
            onClick={() => handleFilterClick(title)}
            className={classNames(styles.filterButton, styles.activeFilter)}
          >
            {title}
          </div>
          <div className={styles.listContainer}>
            <ul className={styles.listBox}>
              {getFilterList().map((item) => (
                <li
                  onClick={() => toggleFilter(item)}
                  key={item}
                  className={styles.listText}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div
          onClick={() => handleFilterClick(title)}
          className={classNames(styles.filterButton, styles.btnText)}
        >
          {title}
        </div>
      )}
    </>
  );
}
