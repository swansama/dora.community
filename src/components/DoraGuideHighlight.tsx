import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type GuideProps = {
  altText: string;
  image?: string;
  title: string;
  body: string;
};

export const DoraGuideHighlight = ({
  title,
  altText,
  image,
  body,
}: GuideProps) => {
  return (
    <Card>
      <CardMedia sx={{ height: 500 }} image={image} title={altText} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>{/* add linkedIn */}</CardActions>
    </Card>
  );
};
