import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import "./InfoBox.css"

export default function InfoBox({ info }) {
    const INIT_URL =
        "https://images.unsplash.com/photo-1656326659987-fd618c35dd79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJhaW55JTIwZGF5JTIwaW5kaWF8ZW58MHx8MHx8fDA%3D";

    const HOT_URL =
        "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL =
        "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL =
        "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const COLD_ICON = <AcUnitIcon fontSize="medium" />;
    const HOT_ICON = <WbSunnyRoundedIcon fontSize="medium" />;
    const RAIN_ICON = <ThunderstormRoundedIcon fontSize="medium"/>;

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                ? HOT_URL
                                : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;
                            <span>
                                {info.humidity > 80
                                    ? RAIN_ICON
                                    : info.temp > 15
                                    ? HOT_ICON
                                    : COLD_ICON}
                            </span>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                            <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}