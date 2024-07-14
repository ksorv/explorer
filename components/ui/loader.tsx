export default function Loader() {
  return (
    <div className='flex items-center justify-center p-4'>
      <div
        className={`animate-spin rounded-full border-4 border-primary border-t-transparent`}
        style={{ width: '2rem', height: '2rem' }}
      />
    </div>
  );
}
