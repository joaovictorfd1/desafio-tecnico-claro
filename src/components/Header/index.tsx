
import './style.scss';

interface IHeader {
  title: string;
  subtitle?: string;
}

export const Header = ({
  title,
  subtitle
}: IHeader) => {
  return (
    <div>
      <h2 className='title'>
        {title}
      </h2>
      <div className='d-flex flex-column gap-2 text-left'>
        <p className='subtitle'>{subtitle}</p>
        <div className='divider'></div>
      </div>
    </div>
  );
};