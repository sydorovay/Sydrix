// src/components/LoadingFallback/LoadingFallback.tsx
export default function LoadingFallback() {
  return (
    <div
      role="alert"
      aria-busy="true"
      style={{
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.2rem',
      }}
    >
      Завантаження...
    </div>
  );
}