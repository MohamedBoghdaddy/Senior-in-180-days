"""Generate the canonical 180-day engineering system."""

from tools.enhance_180_day_assets import enhance
from tools.generate_180_day_system import generate


if __name__ == "__main__":
    generate()
    enhance()
