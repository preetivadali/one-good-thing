import QuoteCard from "../assets/components/QuoteCard";

export default function Home({
  message,
  loading,
  feedback,
  buttonLabels,
  onButtonClick,
  onSave,
  onCopy,
  onAnother,
}) {
  return (
    <QuoteCard
      message={message}
      loading={loading}
      feedback={feedback}
      buttonLabels={buttonLabels}
      onButtonClick={onButtonClick}
      onSave={onSave}
      onCopy={onCopy}
      onAnother={onAnother}
    />
  );
}
